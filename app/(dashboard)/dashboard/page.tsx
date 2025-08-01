import { authOptions } from "@/lib/auth";
import SignoutButton from "@/components/signoutbutton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import WelcomeBanner from "../_components/welcomebanner";
import Coursecard from "../_components/courses";
import { CreateCourseCard } from "../_components/createcourse";

import CourseList from "../_components/courses";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  console.log(session?.user)
  if (!session || !session.user) {
    return redirect("/signin");
  }
  const id: string = session?.user.id;

  return (
    <div className="flex flex-col items-center justify-center mt-20  w-screen">
      <div className=" justify-center">
        <WelcomeBanner session={session} />
       
       
        <div className="flex gap-4">
          <CourseList user={id} />
        </div>
      </div>
    </div>
  );
}
