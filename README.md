React Context API


Context is designed to share data that can be considered "global" for a 
tree of React components
  - eliminate prop drilling

  - User Authentication
  - Style Themes
  - Language Preferences 
  - Access in a global scale
   - HOC 
   - CRUD from the HOC


Context Api 
  Provider - anything you want to have at a global scale
  Consumer - Access to the provider 

  context hook






  const App = () => {
    return ( 
      <Toolbar theme="dark" />
    )
  }
  
  const Toolbar = ({ theme }) =>  {
    return (
      <div>
        <ThemedButton theme={theme} />
      </div>
    )
  }
  
  const ThemedButton = ({ theme }) => {
    return (
      <Button theme={theme} />
    )
  }



const ThemeContext = React.createContext('light');

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

const Toolbar = () =>  {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

const ThemedButton = () => {
  const contextType = ThemeContext;
  
  return(
    <Button theme={this.context} />
  )
}




  //                                  Index
  //                                    |
  //                                   App
  //                               /             \ 
  //                         Messages             Market 
  //                           / \                      \
  //                   PForm       Posts                 List 
  //                                 \                     \
  //                                  Post                Item 
  //                                   / \                     \ 
  //                             CForm    Comments          Reviews 
  //                                       \                       \
  //                                        Comment              Review













  //                                   Index
  //                                     |
  //                                    App
  //                                     |
  //                                    Auth (user )
  //                               /             \ 
  //                         Messages (user)      Market  (user) 
  //                           / \                      \
                    // PForm       Posts (user)           List (user) 
  //                                 \                     \
  //                                 Post (user)            Item (user) 
  //                                   / \                     \ 
  //                             CForm    Comments (user)       Reviews (user) 
  //                                       \                       \
  //                                         Comment (user)        Review (user)










//  Context API
//  Provider store globally user  Index
// {Consumer}                     |
//                                App
//                               /             \ 
//                         Messages             Market 
//                           / \                      \
//                   PForm       Posts                 List 
//                                 \                     \
//                                 {Post} (user)            Item 
//                                   / \                     \ 
//                             CForm    Comments          Reviews 
//                                       \                       \
//                                         {Comment} (user)        {Review}(user)



user DateJoined, memberlvl, username


 Context
  provider 
     user  = { date, memberlvl, username }

     updateuser
     adduser 
     deleteuser
 { consumer }
 
                          index 
                         app (routes)
                {navbar} (username)    Profile
                               {Form}                {account} (date, member, username)


//  Context API
//  Provider  store globaly        Index
// {Consumer}                     |
//                                App
//                 /              /             \ 
//   (register)  Register         Login (handleLogin)           Navbar (user, logout)
//                           / \                      
//                   PForm       Posts                 
//                                 \                     
//                                 {Post} (user)            
//                                   / \                     
//                             CForm    Comments           
//                                       \                       
//                                         {Comment} (user)      

// Provider
//   user Object
//   handleRegister
//   handleLogin
//   handleLogout
//   isAuthenticated
//   setUser