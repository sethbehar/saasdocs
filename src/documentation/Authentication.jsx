import CodeBlock from '../assets/CodeBlock';
const Authentication = () => {
  return (
          <div className="ml-12 py-12">
              <div className="flex flex-row gap-1 items-center mb-12">
                  <h1 className="text-2xl md:text-4xl">Authentication</h1>
                  <img src="/supabase.png" alt="Supabase" className="w-12 h-12" />
                  <img src="/react.png" alt="React" className="w-12 h-12" />

              </div>
  
              {/* Supabase Client Setup */}
              <div className="mb-4 flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                      <span className="text-2xl text-black">Configure Supabase in React</span>
                      <img src="supabase.png" alt="Supabase" className="w-8 h-8" />
                  </div>
                  <p>
                    Now we can get started with authentication in our React app using Supabase.
                  </p>
                  <p>Since we have our API Keys configured already, we can go ahead and create a  <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>src/utils/supabase.js</span> file to initialize our Supabase client.</p>
                  <div className="space-y-4 text-sm md:text-md">
                      <p>Inside this file we will initialize our Supabase Client</p>
                      <CodeBlock text="
    // src/utils/supabase.js
    
    import { createClient } from '@supabase/supabase-js';

    const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
    );

    export default supabase;    
                                        " />
                             </div>
                        </div>

                        {/* Login in App.jsx Setup */}
                        <div className="mb-4 flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center mt-12 mb-2">
                                        <span className="text-2xl text-black">Configure <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>App.jsx</span></span>
                                        <img src="/react.png" alt="React" className="w-8 h-8" />
                                </div>
                                <p>
                                    Inside the <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>App.jsx</span> file, we will import the Supabase client from <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>src/utils/supabase.js</span> and use it to manage user authentication. We will also set up a <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> state to keep track of the user's authentication status.
                             </p>
                                <div className="mt-4 space-y-4 text-sm md:text-md ">
                                    <p>Add this import at the top of <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>App.jsx</span></p>
                                    <CodeBlock text="import supabase from '../utils/supabase';" />
                                    <p>Then we will add the following code to manage user authentication:</p>
                                    <CodeBlock text="
const App = () => {
const navigate = useNavigate()
const [session, setSession] = useState(null)

useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
    })
    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
        setSession(session)

        if (event === 'SIGNED_IN') {
            navigate('/')
        }
    })

    return () => subscription.unsubscribe()
}, [])

                                    "/>
                                    <p>This code first initializes the <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> state, which keeps track of the user's authentication status. It then uses the <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>useEffect</span> hook to check if a user is already signed in when the app loads. If a user is signed in, it sets the <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> state and navigates to the home page.</p>
                                    <p>This will allow us to retrieve the user's <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> information and data (like email) so we can use it for user-specific features in our app (like Stripe payments).</p>
                                </div>
                        </div>

                        {/* Trigger Setup */}
                        <div className="mb-4 flex flex-col gap-2">
                                <div className="flex flex-row gap-2 items-center mt-12">
                                        <span className="text-2xl text-black">Adding Login to Routing</span>
                                        <img src="/react.png" alt="Supabase" className="w-8 h-8" />
                                </div>
                                <p>
                                    Now that we have our Supabase client set up and our <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> management in place, we can add a login route to our React app. This will allow users to log in using the Supabase authentication UI.
                                </p>
                                <p>Inside <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>App.jsx</span>, we will add a new route for the login page. You can use the following code as an example.</p>
                                <div className="mt-4 space-y-4 text-sm md:text-md">
                                        <CodeBlock text={`
return (
    <Routes>
        <Route path="/" element={
            <div className='min-h-screen md:mx-15 lg:mx-15 flex flex-col gap-48'>
                <Navbar  session={session} supabase={supabase} />
                <Hero />
                <About />
                <Product />
                <Pricing />
                <Footer />
            </div>}
        />
        <Route path="/login" element={
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md p-8">
                    <Auth 
                        supabaseClient={supabase} 
                        appearance={{ theme: ThemeSupa }}
                        redirectTo={"/"}
                    />
                </div>
            </div>
        } />
        <Route path="/docs" element={<Docs />} />
        <Route path="/payment" element={<Payment session={session} />} />
    </Routes>`} />       
                                </div>
                        </div>

                         {/* Supabase Client Setup */}
                        <div className="mb-4 flex flex-col gap-2 mt-12">
                                <div className="flex flex-row gap-2 items-center">
                                        <span className="text-2xl text-black">Navbar with Signin/Signup</span>
                                        <img src="/react.png" alt="Supabase" className="w-8 h-8" />
                                </div>
                                <p>
                                    To manage user auth in our Navbar, we need to accept the <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> and <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>supabase</span> prop.
                                </p>
                                <div className="space-y-4 text-sm md:text-md">
                                    <p>Here is the definition for the nav component where we pass in the <span className='text-purple-300 dark:bg-gray-800 p-1 rounded-lg'>session</span> and <span className='text-green-300 dark:bg-gray-800 p-1 rounded-lg'>supabase</span> props from <span className='text-blue-300 dark:bg-gray-800 p-1 rounded-lg'>App.jsx</span>.</p>
                                    <CodeBlock text="const Navbar = ({ session, supabase }) => {" />
                                    <p>Finally, we can add this somewhere in our return statement to manage user authentication.</p>
                                    <CodeBlock text={`
{ session ? (
    <button 
    onClick={() => supabase.auth.signOut()}
    >
    Logout
    </button>
) : (
    <Link to="/login">
    Login
    </Link>
)}
        `} />
                             </div>
                        </div>
                </div>
        )
}

export default Authentication