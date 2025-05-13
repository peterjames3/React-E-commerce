import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const secret = searchParams.get("secret");
  const userId = searchParams.get("userId");
  const { handleVerification, user } = useContext(UserAuthContext);
  const [shouldVerify, setShouldVerify] = useState(false);
  console.log(user);
  useEffect(() => {
    if (user.role !== "guest") {
      if ((secret, userId)) {
        setShouldVerify(true);
      }
    }
  }, [user, secret, userId]);

  useEffect(() => {
    if (shouldVerify) {
      handleVerification(userId, secret);
    }
  }, [shouldVerify, userId, secret, handleVerification]);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h2 className="font-medium text-black">Verifying ....</h2>
    </div>
  );
};

export default Verify;
