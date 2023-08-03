import auth from "@/firebase/firebaseAuth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession()
 
    const [user, loading, error] = useAuthState(auth);
    console.log("🚀 ~ file: index.js:9 ~ HomePage ~ user:", user)
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      <h2 style={{textAlign:"center",marginTop:"10%"}}>{session?.user.name}</h2>
      <h2 style={{textAlign:"center"}}>{session?.user.email}</h2>
    </div>
  );
};

export default HomePage;
