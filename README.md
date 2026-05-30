# Network Message Board
A network message board between two different  computers on the same wireless network. One computer serves as the server and the other as the user. 

The user computer hosts the front end program. All previous messages can be viewed below a small form that allows users to add additional messages. 

The server computer receives the messages from the form, stores the messages, retrieves the messages & pushes them back to the user computer to be displayed.

## Server Set-Up

## User Set-Up
1. Download index.html & script.js to the same folder.
2. Create a new file named config.json in the same folder.
3. Paste the following code in the config.json file: ``` {
	"ip_address": ""
} ```
4. In the file inside the empty "" type the ip address of the computer acting as the server.
5. Make sure both computers are on the same network.
6. Run the index.html file.
7. Try writing and submitting messages. Those messages should appear below the input form on the html page if the connection is working properly.