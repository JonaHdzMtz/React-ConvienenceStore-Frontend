import React, { FC } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { login } from "../../services/LoginService";
import { Credential } from "../../interface/Credential";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userName = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const navigation = useNavigate();
  const [code, setCode] = useState<number>(0);
  const [data, setData] = useState();
  const [buttonEnable, setButtonEnable] = useState(false);

  useEffect(() => {
    console.log(`estado: ${buttonEnable}`);
  }, [buttonEnable]);

  useEffect(() => {
    if (code > 0) {
      if (code === 200) {
        navigation("historial")
      } else if (code === 404) {
        alert("Credenciales invalidas");
      }
      setButtonEnable(false);
    }
  }, [code]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonEnable(true);
    if (
      userName.current?.value.trim() === "" ||
      password.current?.value.trim() === ""
    ) {
      alert("campos obligatorios");
      setButtonEnable(false);
    } else {
      const credentials: Credential = {
        userName: userName.current?.value.toString()
          ? userName.current.value
          : "",
        password: password.current?.value.toString()
          ? password.current.value
          : "",
      };
      const result = await login(credentials);
      if (result.ok) {
        setData(await result.json());
      }
      setCode(result.status);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.userDiv}>
          <label className={styles.label} htmlFor="usernameInput">
            Usuario
          </label>
          <input
            ref={userName}
            className={styles.input}
            id="usernameInput"
            type="text"
            placeholder="Usuario"
          />
        </div>
        <div className={styles.userDiv}>
          <label className={styles.label} htmlFor="passwordInput">
            Contraseña
          </label>
          <input
            ref={password}
            className={styles.input}
            id="passwordInput"
            type={showPassword ? "text" : "password"}
            placeholder="Usuario"
          />
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-linetype-icon/eye-43.png"
            className={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button disabled={buttonEnable} className={styles.button}>
         {buttonEnable==false? " Iniciar sesión" : "Espere..."}
        </button>
      </form>
    </div>
  );
};

// tailwind
// export const Login= () => {
//   return (
//     <div  className="h-screen flex items-center justify-center" style={{background:"#292929"}}>
//         <div className=' shadow-md shadow-cyan-200  h-100 w-80 md:w-1/2 lg:w-100 rounded-lg flex  flex-col items-center' style={{background:"#323833"}}>
//             <div className='flex flex-col w-1/2' style={{paddingTop: 30}}>
//                 <label className='text-white' htmlFor="usernameInput">Usuario</label>
//                 <input className='bg-white rounded-sm p-8 text-2xl' id="usernameInput" type="text" placeholder='Usuario' />
//             </div>
//             <div className='flex flex-col w-1/2' style={{paddingTop: 30}}>
//                 <label className='text-white' htmlFor="passwordInput">Usuario</label>
//                 <input className='bg-white rounded-sm p-8 text-2xl' id="passwordInput" type="text" placeholder='Usuario' />
//             </div>
//                 <button className='rounded-sm   h-10 w-20 mt-5' style={{background:"#435748"}}>Ingresar</button>

//         </div>

//     </div>

//   )
// }
