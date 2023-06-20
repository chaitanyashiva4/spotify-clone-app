"use client";

import Modal from "@/components/Modal";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import useAuthModal from "./useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClinet = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const {onClose,isOpen} = useAuthModal();
  const onChange = (isOpen:boolean) =>{
    if(!isOpen){
      onClose();
    }
  }

  useEffect(()=>{
    if(session){
      router.refresh();
      onClose()
    }
  },[session,router,onClose])

  return (
    <Modal title="Welcome Back" description="Login to your account" isOpen={isOpen} onChange={onChange}>
      <Auth theme="dark" providers={["github"]} magicLink supabaseClient={supabaseClinet} appearance={{theme:ThemeSupa,
        variables: {
          default:{
            colors:{
              brand: '#404040',
              brandAccent:'#22c55e  '
            }
          }
        }
      }}/>  
          
    </Modal>
  )
}

export default AuthModal