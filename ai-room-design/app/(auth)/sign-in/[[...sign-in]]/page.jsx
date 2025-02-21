import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-centre items-center h-screen'>
        <SignIn/>
    </div>
  )
}