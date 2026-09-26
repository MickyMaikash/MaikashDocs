# Basics of Kali Linux 
### Basic Commands in CLI(terminal)
- ls -> list files
- cd -> change Directory
- pwd -> print working(current) Directory
- mkdir -> create Folder
- rm -> remove file
- rm -r -> remove folder/directory and its contents
- cp -> copy file/folder
- mv -> move/rename file/folder
- touch -> to create an empty file
- cat -> view file content

- if we do ls -l then we can see what files are there in that currect directory with detail of each files as it's last modification date/time and what permission it has and all 
```code
┌──(kali㉿kali)-[~/Desktop]
└─$ ls -l                                         
total 136648
drwxrwxr-x 2 kali kali      4096 Sep 27 01:50 star
                                                                                                      
```

## some powerful commands
- sudo apt update && sudo apt upgrade -> update and upgrade System
- whoami -> Check logged-in User
- ifconfig /ip a -> Check network info
- uname -a -> check system info
- history -> it tells all the command ran in the terminal
- echo "hello Text" > file.txt -> this command will write this "hello Text" in the file.txt without opeining it 


## Basic Networking Concepts
* IP Address -> Unique address of each device on a network
* MAC Address -> Physical Address of Network Adapter
* DNS	-> Converts Domanin Names to Ip Address
* Ports -> Virtual Endpoints for Network Communication

## Networking Commands In Kali linux
- ifconfig -> Show ip ,mac and network details (Deprecated)
- ip a -> show ip addresses(now mostly used) 
- ip r -> show routing table
- iwconfig -> show wireless interface details
- ping -> check connectivity
- nslookup -> check ip address of any domain
- netstat -tunlp → Show listening TCP/UDP ports and the processes using them (Deprecated; ss -tunlp is commonly used now)


## Restart NetworkManager

```
sudo systemctl restart NetworkManager
```

> this restarts the NetworkManager service. It can be useful when a network connection is not working correctly or when network configuration changes are not being applied.





























