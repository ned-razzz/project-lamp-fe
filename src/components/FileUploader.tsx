"use client"
import { ChangeEvent, useState } from "react";
import { supabase } from "~/src/lib/supabase";

export default function FileUploader() {  
  const [ file, setFile ] = useState<File | null>(null);

  // Select file
  async function selectFile(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files == null ) {
      return;
    }
    setFile(event.target.files[0]);
  }

  // Upload file in supabase storage
  async function uploadFile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // file null check
    if (!file) {
      console.log("No file selected");
      return;
    }

    // upload to supabase storage
    const { data, error } = await supabase.storage
      .from("archive")
      .upload(`uploads/${file.name}`, file);


    // error check
    if (error) {
      throw error;
    }
    console.log("File uploaded: ", data);
  }

  return (
  <div>
    <form onSubmit={uploadFile}>
      <input 
        className="block w-full mb-2"
        type="file" 
        onChange={selectFile}
        accept="image/*,video/*,.pdf,.hwp"
      />
      <button className="p-1 border-2 cursor-pointer" type="submit">Upload</button>
    </form>
  </div>
  );
}
