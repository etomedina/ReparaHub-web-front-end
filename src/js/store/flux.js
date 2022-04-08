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
			models: [],
			categorys: [],

			proveedores: [
				{
					name: "Toyota Fix 2000",
					presupuesto: "Revision y chequeo del vehiculo a nivel mecanico y electrico con diagnostico del problema en menos de 24 horas a partir del momento del reporte",
					fecha: "Abril-2022",
				},
				{
					name: "Auto Repair Technology",
					presupuesto: "Revision de falla reportada a nivel mecanico con personal especializado en vehiculos marca toyota. Trabajo garantizado.",
					fecha: "Abril-2022",
				},
				{
					name: "Chasis Service",
					presupuesto: "Evaluacion de vehiculo a nivel general, con diagnostico preciso en los distintos niveles. Garantia por 1 semana.",
					fecha: "Abril-2022",
				},
				{
					name: "PDR Service",
					presupuesto: "Revision del vehiculo en sitio, con envio de personal calificado al lugar del incidente para el diagnostico y reparacion del mismo.",
					fecha: "Abril-2022",
				},
			]



			// inputUser: [
			// 	{
			// 		value: "",
			// 	}
			// ]
		},

		actions: {
			getModels: async () => {
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
				// setStore({
				// models: models1
				// });

				let uniqueModel = models1.filter((element, index) => {
					return models1.indexOf(element) === index;
				});
				setStore({
					models: uniqueModel
				});
			},
			//get category clone of get model
			getCategorys: async () => {
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


				let uniqueCategory = categorys1.filter((element, index) => {
					return categorys1.indexOf(element) === index;
				});

				setStore({
					categorys: uniqueCategory
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
