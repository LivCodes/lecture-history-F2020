# Intro to HTTP
* HyperText Transfer Protocol aka the language of the web!


### Review Client and Server
* Request Response Cycle
* Open up Inspect and go to the Network tab to see the HTTP requests and HTTP responses
* cURL! Just another way to make a requests and get a response
* Postman, yet another way to make a request and get a response


### DNS (Domain Name System)
* Every computer as an IP Address, just like every phone has a phone number
* DNS translates between IP and domain name: 187.34.234.97 <=> www.google.com


### Your typical interaction with the Internet starts with a web browser when you:
1. Enter a URL like http://www.google.com into your web browser's address bar.
2. The browser creates an HTTP request, which is packaged up and sent to your device's network interface.
3. If your device already has a record of the IP address for the domain name in its DNS cache, it will use this cached address. If the IP address isn't cached, a DNS request will be made to the Domain Name System to obtain the IP address for the domain.
4. The packaged-up HTTP request then goes over the Internet where it is directed to the server with the matching IP address.
5. The remote server accepts the request and sends a response over the Internet back to your network interface which hands it to your browser.
6. Finally, the browser displays the response in the form of a web page.


### Requesting a webpage vs requesting JSON 
* https://www.reddit.com/ vs https://www.reddit.com/.json
* JSON stands for JavaScript Object Notion
    * They are strings that have the same format as a JavaScript object


### Parts of a URL

https://www.example.com/users/profiles?name=ferret&color=purple

* scheme            (http or https)
* domain/host       (www.example.com)
* path              (/users/profiles)
* query parameters  (?name=ferret&color=purple)


### Headers
* Additional Information that's very important
* Just like if you want to send a letter using United State Postal Service, you'll need additional info like addresses


### Security
* HTTP vs HTTPS (plain/clear text vs encrypted transfer of data over the public internet)
* Same Origin policy
* CORS and how are they related?


### How does my browser remember things? Like whether or not I'm logged in?
 * The HTTP protocol is stateless. 
 * In other words, the server does not hang on to information between each request/response cycle (each one is independent).


### How to build stateful application:
  * Sessions (stored on the Server)
  * Cookies (stored on the Client)

