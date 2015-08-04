# Before to use

1. Make sure the "bundles" property is empty within "System.config()" parameter in "config.js"
2. Make sure the value of "baseURL" property is correct directory to access static resources.
3. Run "jspm install" in current directory.  

# How to use

1. Open 'index.html' in browser (using local server) . You should see texts in "console" within browser are as follows:

    ```
    Hello Linne
    Hello, this is from users.
    ```
    
    Using ES 6.

2. Comments "ES 6 codes" in "main.js" & "users.js", uncomments "ES 5 codes" in "main.js" & "users.js", you should see texts in "console" within browser are as follows:

    ```
    hello, this is from users
    ```
    
    Using ES 5.

3. Execute "jspm bundle-sfx lib/main" in command line, and comments "script" tags except "build.js" in index.html, then you should see texts  in "console" within browser are as follows:
    
    ```
    hello, this is from users
    ```
    
    Using ES 5 and only one javascript file in html.
