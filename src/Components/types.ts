import { RefObject } from "react";

export type post={
    id: number;
    company: string;
    logo: string;
    position: string;
    role: string;
    level: string,
    postedAt: string;
    contract: string;
    location: string;
    languages:Array<string>;
    tools:Array<string>;
}
export type contextType = {
    isLoggedInRef: RefObject<boolean>;
    setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>;
};


export type inputTypes = {
    firstname?: string;
    lastname?:string;
    email: string;
    password: string;
    password2?:string;
}

  
      
      
     
      
      
      
