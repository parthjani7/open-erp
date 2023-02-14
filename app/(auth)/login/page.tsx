import Google from 'public/google.svg'
import styles from './page.module.css'

export default function login() {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-b from-cyan-500 to-blue-500 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg text-white">
          <div className="flex items-center justify-start space-x-3">
            <h5 className="font-medium text-xl">Timely</h5>
          </div>
          <div className="space-y-5">
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              Enter your account and discover new experiences
            </h1>
            <p className="text-lg">You do not have an account?</p>
            <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Create account here
            </button>
          </div>
          <p className="font-medium">© {new Date().getFullYear()} JaniHQ</p>
        </div>

        <div
          className={`flex flex-1 flex-col items-center justify-center px-10 relative`}
        >
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-6 h-6"></span>
              <a href="#" className="font-medium text-lg">
                Brand
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span>Not a member? </span>
              <a href="#" className="underline font-medium text-[#070eff]">
                Sign up now
              </a>
            </div>
          </div>
          <div
            className={`flex flex-1 flex-col justify-center space-y-5 max-w-md`}
          >
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Sign in to account
              </h2>
              <p className="text-md md:text-xl">
                Sign up or log in to proceed to an outstanding experience!
              </p>
            </div>
            <form action="/" method="post">
              <div className="flex flex-col max-w-md space-y-5">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <button
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium border-black bg-black text-white"
                  type="submit"
                >
                  Continue
                </button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4">Or</span>
                  <span className="w-full border border-black"></span>
                </div>
                <button
                  className={` ${styles.group} flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative`}
                >
                  Sign in with{' '}
                  <Google
                    className={` ${styles.animate_wiggle} ml-2`}
                    alt="Google"
                  ></Google>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
