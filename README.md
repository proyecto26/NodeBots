# Tessel Starter
**Tessel 2** is a robust **IoT** and **robotics** development platform. 
Leverage all the libraries of Node.JS to create useful devices in minutes with Tessel. 

![Tessel 2](https://github.com/jdnichollsc/Tessel/blob/gh-pages/images/tessel2.jpg?raw=true)

# Commands

Command                                  | Action
-------------------------------------    | -----------
`t2 list`                                | Show the Tessels connected.
`t2 rename <name>`                       | Change the name of the Tessel connected.
`t2 wifi -n "<network>" -p "<password>"` | To connect to a new network. **(Wifi radio on Tessel can only connect to 2.4GHz networks)**
`t2 provision`                           | Authorizes your computer to push code to the connected Tessel 2.
`t2 update`                              | Check for a new version of the **Tessel 2 firmware**. If there is an update available, it will be **downloaded** and **installed**.