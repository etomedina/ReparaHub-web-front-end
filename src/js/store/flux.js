const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
				
			],
			models : [],
			categorys : []

			// inputUser: [
			// 	{
			// 		value: "",
			// 	}
			// ]
		},

		actions: {
			getModels: async() => {
				const response = await fetch(
					'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_Toyota?limit=80', {
						headers: {
							'X-Parse-Application-Id': 'NQYSBMB8Y8nB2PusmrmtZmoZ6pTxwyLoG1QQ3ann', // This is your app's application id
							'X-Parse-REST-API-Key': 't7Iu9h7kndNKtNzbhcTKCSsJVz30fPTKQfzkwV5g', // This is your app's REST API key
						}
					}
				);
				const body = await response.json();
				if (!response.ok) return;
				const models1 = [];
				for (let model of body.results) {
					models1.push(model.Model);
				}
				setStore({
					models: models1
				});
			},
			//get category clone of get model
			getCategorys: async() => {
				const response = await fetch(
					'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List_Toyota?limit=80', {
						headers: {
							'X-Parse-Application-Id': 'NQYSBMB8Y8nB2PusmrmtZmoZ6pTxwyLoG1QQ3ann', // This is your app's application id
							'X-Parse-REST-API-Key': 't7Iu9h7kndNKtNzbhcTKCSsJVz30fPTKQfzkwV5g', // This is your app's REST API key
						}
					}
				);
				const body = await response.json();
				if (!response.ok) return;
				const categorys1 = [];
				for (let category of body.results) {
					categorys1.push(category.Category);
				}
				setStore({
					categorys: categorys1
				});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
			//reset the global store
				setStore({ demo: demo });
			},
			
			// validateInput: (inputValue) => {
			// 	if(inputValue === "") alert("The input cannot be empty");
			// 		return("Esta mal");
			// return("Grabar registo en base de dato");

			
			// }

		}
	};
};

export default getState;
