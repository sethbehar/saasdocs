import CodeBlock from '../assets/CodeBlock';
const Db = () => {
  return (
          <div className="ml-12 py-12">
              <div className="flex flex-row gap-1 items-center mb-12">
                  <h1 className="text-2xl md:text-4xl">Database</h1>
                  <img src="/Supabase.png" alt="Supabase" className="w-12 h-12 mt-1" />
              </div>
  
              {/* API KEY Setup */}
              <div className="mb-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                      <span className="text-2xl text-black">Supabase Project Setup</span>
                      <img src="/Supabase.png" alt="Supabase" className="w-8 h-6" />
                  </div>
                  <p>
                      Lets get our Supabase project setup. First, we need to create a new project on the <a href="https://supabase.com" className="text-blue-500 hover:underline">Supabase website</a>. Once you have created your project, you will be able to access your database and API keys.
                  </p>
                  <div className="space-y-4 text-sm md:text-md">
                      <p>To retrive your projects API keys, locate the "Connect" button at the top of the screen. Go to App Frameworks and select <span className="text-blue-500">"React"</span> using <span className="text-blue-500">"Vite"</span>.</p>
                      <p>Add these to your frontend .env file: (Example below)</p>
                      <CodeBlock text="VITE_SUPABASE_URL=https://myrkowefwefzrpqaeho.supabase.co" />
                      <CodeBlock text="VITE_SUPABASE_ANON_KEY=eyJhewfwefIUzI1NiIsInR5c" />
                 </div>
              </div>
  
              {/* Table Setup */}
              <div className="mb-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center mt-12">
                      <span className="text-2xl text-black">Users Table</span>
                      <img src="/Supabase.png" alt="Supabase" className="w-8 h-6" />
                  </div>
                  <p>
                      In these docs, we will create a users table to track our users and their subscriptions. You can create this table in the Supabase by navigating to the <span className="text-green-300 dark:bg-gray-800 p-1 rounded-lg">"Database"</span> section and clicking <span className="text-green-300 dark:bg-gray-800 p-1 rounded-lg">"Tables" {"->"} "New Table"</span>
                  </p>
                  <div className="mt-4 space-y-4 text-sm md:text-md bg-gray-200 rounded-2xl p-2">
                    <p>Our "users" table will have 3 columns, ID, email, and subscription status.</p>
                    <p>Column 1: Primary Key: ID (uuid) and Foreign Key to auth.users.id</p>
                    <p>Column 2: Email (text)</p>
                    <p>Column 3: Subscription Status (text)</p>
                    <p>Add the bottom of the table creation you will be able to add the foreign key from public.users.id to auth.users.id</p>
                  </div>
              </div>
  
              {/* Trigger Setup */}
              <div className="mb-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center mt-12">
                      <span className="text-2xl text-black">Trigger Setup</span>
                      <img src="/Supabase.png" alt="Supabase" className="w-8 h-6" />
                  </div>
                  <p>
                      To setup our trigger for the users table, we will need to create a new trigger in the <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>Supabase dashboard SQL Editor</span>. This trigger will automatically insert a new row into our users table when a new user signs up.
                  </p>
                  <div className="mt-4 space-y-4 text-sm md:text-md">
                    <p>Enter this command in the SQL Editor to ensure every user who signs up is added to the users table:</p>
                      <CodeBlock text="
    -- Create a trigger function to handle new user creation
    create function public.handle_new_user()
        returns trigger language plpgsql security definer as $$
    begin
        insert into public.users (id, email, subscription_status)
            values (new.id, new.email, 'free');
        return new;
    end;
        $$;
    create trigger on_auth_user_created
        after insert on auth.users
        for each row execute procedure public.handle_new_user();
                      " />       
                      <p>In the Authentication section we will add Supabase to our React app and configure it to use our new users table.</p>
                  </div>
              </div>
          </div>
      )
}

export default Db