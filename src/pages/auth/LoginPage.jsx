import illustration from "../../assets/images/illustration.svg";
import LoginForm from "../../modules/auth/LoginForm";
import Logo from "../../components/Logo";
import SocialButton from "../../modules/auth/SocialButton.jsx";

const LoginPage = () => {
  return (
    <>
      {/* login container */}
      <div className="flex w-[1200px]  items-center justify-center">
        {/* form */}
        <div className="px-8 md:w-1/2 md:px-16">
          <Logo />
          <LoginForm />
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <SocialButton />
        </div>
        {/* image */}
        <div className="hidden w-1/2 md:block">
          <img className="rounded-2xl" src={illustration} alt={``} />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
