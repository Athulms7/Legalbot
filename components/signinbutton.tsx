
"use client";

import { signIn } from "next-auth/react";


const providers = [
  {
    id: "google",
    name: "Google",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABUFBMVEX////qQzU0qFNChfT7vAU2f/Ssxvswf/b1+f4tffX7twDoJw//vQD7uQDqPzDqQTP4ubUtpk7pNiUmpErpOyvpNCLpNjf8wwD6/vsaokPoLhrva2E8gvQ4q1dguXbk8+hDgv3Z7t75y8jsU0fxenL2paD/9PPyhHzzlI7sSjz/9+D8xTT//vb8zlzG2PyXuPh7pvf8ykuSzaBclfYzqj+13b51wYen1rJQs2lDrl/+5OP2n5ruYljxfXX5x8TvcGf82Nb3rqn96+roIgL7y5rsUDH+4Z7vbyj0kB3+6rn4rBDtYC3ygSP92ob3oBb/78r91nfzjn3h6/3+57NNjfb+9Nj//Oz93pfV2qIVd/deqkbS4fzcuBqwsy9/xJB5rkHGtiWTsDnauBv90mttn/eMtuw/jtA7mKc3oXu5z/tAit89k7w5nY/I5c42pWaewe0rGXJIAAAH30lEQVR4nO2aa3/aNhSHjUOaBIONwbTYBFwggZDe0wK5sASyrWu39bLetq5bdusu7cb2/d/NNibBxpZlLFkmv/O8bm0/kXT+0hEcBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ47CRP2pvDZopUVHETnOw1T4aNQ5ZfxUZWo3tTzqaVioYaqJkIxqihZKmpba2Gy3WXxiJxk7TdJNSPkii4dnZOV5Oy1b+RCv5y81oKiWhMlo6yXxFKIjBdlPEglDJs/7mEBzuaKUQerZkSdtZktrTqAg4k3MeSREqQ9ZfH8xxUws9fDMDqTUbrA3QNCL5TRwHQ9YW/hwOovpZjsLJKWsTH9oCAT8TRdhm7eJFvqSQ8TMpdIasfdy0KtpC9dMPSThireTkWCM4gBMKzSStxjbZAZwgCsesvaacdgrk/VLmTN1hrTahQSIivClVWMuZjAQKM3SK0mF/5tjR6PmlzEMH6934VomqYColjNgKVujUmBlBxqdGEFx2wa3LLtimXmQYC27TjQn2gsfCJRc8XGAnI0miYiFKwf+ZtSCXCicoKQVNUJon7R2D9klTETREKzwJgidhjoNiQUu180PHDrM1zLc7/k1j5oIj/CojFYTByOcse2p2xr1GkrngKXaVEbUU+kaiNUrNH76YC3JNzAOhqA0w+rvHTVeHgL3gNl7US1pziPfA405pxpG9IOYcVQoh2iyji6nKXpCr4MxRSWiHeujpoJQYwQZOHVUKw7DPPbL2EAkQxMr6hTpIZkcrCYIjjDKjLdYFPJU+TYAgV6K4pWwlQfCzwFOvJCT8jjOAdObzq5da8GEufe0LpOKSC3Jpg2uPEIpaEpZSBB5nLMUvfQVLCblLWZgbaZuvvIdRScRNSgR2M1PDa197KUoK6y+MypNc+lzxqYeiMGT9hVFJzzIfG4VlX4Tcs4xD0R0bksj6AyPzPJd2KjpjQ0vMtfvCuATN2JjZpIoD1t8XmdcZt6EjNpa/zHDfzo3hbGyIyx6F3EzcOxWf2qtwyPr7InPTa5Kex4bYZP190XnmZ2jFRmnJd9wmnsvQVnx0VWP9eQS45ytoxsY3rD+PAAjBdDr3GPcx61cI8IGG4BvfZWgZYj9n/e1qdFZoGPoXGlPwFr7hxkp0NmgYPvQvNIbhw5gNX1AwfIIyzLyO13D1NgXDW8gxxH8OGcMrFAy992w2N+I2vEPBECWYex6z4eZdCoaECg0hw/vkBX333Zbhy5gNV16RN0QGfuZZ3Iab5A13kYb4YUHIkELke7Ywzg13L73hm9gN18EQDEMaxr8OyRuia2nsaUHBEJ2H2Cf8BNfSm4natVE5AiME07kncRuuxWyYvhe3IY1GDaqZmE7HbUhh5z13eeggRCAm9vSEanmHKqbJPQE/Rh4Q8UtNcrsYyMgPsRCT24lCtjFC7NuS201ENtuyue+wDd+uYbGKMqTSEUYV02z6+wPSr3u3hjIk/TaLl76G2R94Xq0Tft0V5CASftkE31KT/ZHnefmM8Oveb/r7bb4n/DIbH7/sT7yJWib7NtQkpVNKfRZi9gY/obhH9GXIZbhGpZR6Z372Z34K2UG8g5ikNM6/FvNt72z2l3NBwoOIrDM09t0W7uOFERL8DKpO7lUfUIabNPZsFq68yP4qzwryco3cq+6jJimdHY2Jc5paIeFAHZN60zvk1o7WMuQc98DTkHBQJFVskENI5XBoc1FNzW3MPHKPzHtuI4eQVhpaeISEc572ibwGNYK0tt02k4O+IyRciiS2p3eRUbFJLStMrL6wKySIL0X0HKU7STnut5wREv5+xlKsRlV8EXBEplhJTXYz8yHhUox6UlxBr0Ja54pzbnmEhFsx0igig8IcQmpxb6OrQYbRFO8jq4wJORcfenKworzwDjVQkHKdMcEYRCM0ugs9e/1VwBSlcyXjZq+Io7hIU+P2RqAglVbwHDiGfLEaOvt/fxvkRz0qbMY48zT0MI559Y/rgUNIfxVa1IKLjTWMRfzVqNeMP9uDP4MUKfzYy5My3iAaw1jFc9R7qvVHe/AXOu43qPxG34suriKvyv3AcBzX1OmkKFY/IuKC5sHQDeY8tT5arXURkuMzVZ192IO//Wcq1WOTizJWPbWRDcl+fd6yXO/XnHqW4j+rPjM1nqSYUseep1NJ9aC31x3XLcbd/l6NV9Wi11Qo/uuX+3EKclw/nOJE0/CcUCx6ytn/zjs24pyjFr0wEzUkXrGxFlMUzrCPX23CK87FRpx1dEqZp6go8x+dw7gZy3bNhU5xnrpjI/ZFaCuGrzZhFGdig/rBno3iRWxsxF9lpoSMxZBMY2Mj1qh3oc/tSYhixQZTQUORZkW1YoOxoBEa+1RLqqz+x1jQoEdzMS7Y0yLMAntUTGRyl67RqCP20VEoVgn+NCAa5RqNYVQJXbiSoU88NuRkLMEL9H2yw6juJ2aGntNVyeWGTOi+nDDlM0JTVVZ7hH8HSAy9RsBRVvdJ/1iVJPWojrJ6kJAM9KXei7AejfFLup+JvjffBsWiqPaSPD8ddGvezVCk3kHwDUCS0Pv7+JKyobeXvPwLRO/2fPraLju1111CPZt6v1c1e9wenrLpplbP+kuz9nwp17t7vQNZdVCs1s76XY8Lm2WmrNfrY4N6XdcvlxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwWfgf+bwCElhpUaQAAAAASUVORK5CYII="
  },
  {
    id:"github",
    name:"Github",
    image:"data:image/png;base64,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" 
  }
];

export default function SignInPage() {
  return (
    <div className="flex justify-center flex-col gap-4 mt-50 h-70 max-w-sm mx-auto  text-center bg-black rounded-2xl">
      {providers.map((provider) => (
        <button 
          key={provider.id}
          onClick={() =>
            signIn(provider.id, {
              callbackUrl:"/dashboard",})
          }
          className="border  flex justify-center items-center  bg-black text-white rounded-2xl border-gray-300 px-4 py-2 hover:bg-gray-800 hover:text-white w-60 ml-18"
        >
          <img className="h-10 rounded-2xl" src={provider.image}/><div className="m-1.5 font-bold">Sign in with {provider.name}</div>
        
        </button>
      ))}
      
    </div>
  );
}
