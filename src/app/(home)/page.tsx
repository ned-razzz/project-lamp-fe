import { supabase } from "~/src/lib/supabase";

export default function Home() {
  const addUser = async () => {
    const { data, error } = await supabase.from("user").insert({
      name: "user1",
    });

    if (error) console.log(error);
    if (data) console.log(data);
  };

  addUser();

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
