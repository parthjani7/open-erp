import type { PrismaClient, Prisma } from '@prisma/client'
import type { Adapter, AdapterAccount } from 'next-auth/adapters'

export function PrismaAdapter(prisma: PrismaClient): Adapter {
  return {
    async createUser(data) {
      const { name, email, accounts, sessions, createdAt, updatedAt } = data
      const user = prisma.user.create({
        data: {
          name,
          email,
          accounts,
          sessions,
          createdAt,
          updatedAt,
        },
      })
      return user
    },

    async getUser(id) {
      return prisma.user.findUnique({ where: { id } })
    },

    async getUserByEmail(email) {
      return prisma.user.findUnique({ where: { email } })
    },

    async getUserByAccount(provider_providerAccountId) {
      const account = await prisma.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      })
      return account?.user ?? null
    },

    async updateUser({ id, ...data }) {
      return prisma.user.update({ where: { id }, data })
    },

    async deleteUser(id) {
      return prisma.user.delete({ where: { id } })
    },

    async linkAccount(data) {
      return prisma.account.create({ data }) as unknown as AdapterAccount
    },

    async unlinkAccount(provider_providerAccountId) {
      return prisma.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount
    },

    async createSession(data) {
      return prisma.session.create({ data })
    },

    async getSessionAndUser(sessionToken) {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      })

      if (!userAndSession) return null

      const { user, ...session } = userAndSession
      return { user, session }
    },

    async updateSession(data) {
      return prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      })
    },

    async deleteSession(sessionToken) {
      return prisma.session.delete({ where: { sessionToken } })
    },

    async createVerificationToken(data) {
      const verificationToken = await prisma.verificationToken.create({ data })
      // @ts-expect-errors // MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id
      return verificationToken
    },

    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await prisma.verificationToken.delete({
          where: { identifier_token },
        })
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id
        return verificationToken
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === 'P2025')
          return null
        throw error
      }
    },
  }
}
