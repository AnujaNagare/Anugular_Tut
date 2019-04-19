Steps:

1. Open Visual Studio : set path to the project location
	i. command + shift + p
	ii. select type 'code' -> select option to install path 
	iii. now you can access the code from terminal by typing ---> code .

2. To check if the application is running 
	i. Go to the terminal with the location of the project
	ii. type: ng serve
	iii. check if it is compiled successfully 
	iv. open browser -> go to the localhost path mentioned in the terminal 


About the folder structure:
1. e2e : end to end tests for the application 
2. node-modules:  stores all 3rd part libraries on which the application will depend upon 
3. src: source files
4. environments: files that store configuration for the diff env


------- Hot Module Replacement (HMR) --------


webpack automatically injects scripts to the index.html at the run time 

