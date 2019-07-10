var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "600", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "Bloqueado",
    state_color: "#444444",
    state_hover_color: "#444444",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Bloqueado",
    location_url: "",
    location_color: "#999999",
    location_opacity: "1",
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    CRI1327: {
      name: "Cartago",
      url: "page2.html"
    },
    CRI1328: {
      name: "Heredia",
      url: "page2.html"
    },
    CRI1329: {
      name: "Limón",
      url: "page2.html"
    },
    CRI1330: {
      name: "Puntarenas",
      url: "page2.html"
    },
    CRI1331: {
      name: "San José",
      url: "page2.html"
    },
    CRI1333: {
      name: "Alajuela",
      color: "#50b6bb",
      hover_color: "#459da0",
      description: "es una ciudad de Costa Rica, a unos 20 kilómetros al oeste de la capital San José. Alajuela es la cabecera del cantón y de la provincia homónimos, además de ser parte de la Gran Área Metropolitana.",
      //image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Juan_Santamaria_1.JPG/480px-Juan_Santamaria_1.JPG",
      url: "alajuela2.html"
    },
    CRI1334: {
      name: "Guanacaste",
      url: "page2.html"
    }
  },
  locations: {
    "0": {
      lat: "10.016",
      lng: "-84.214",
      name: "Alajuela",
      url: "page2.html"
    },
    "1": {
      lat: 10.071,
      lng: -84.313,
      name: "Grecia",
      description: "Es el cantón número 3 de la provincia de Alajuela, en Costa Rica. Está localizado hacia el centro del país, 20 km al noroeste de la ciudad de Alajuela. Posee un área de 395.72 km² y se encuentra dividido en 7 distritos.",
      url: "page3.html",
      color: "#f36b43"
    },
    "2": {
      lat: 10.087,
      lng: -84.47,
      name: "San Ramón",
      url: "page2.html"
    },
    "3": {
      lat: 9.935,
      lng: -84.522,
      name: "San Maeto",
      url: "page2.html"
    },
    "4": {
      lat: 9.981,
      lng: -84.38,
      name: "Atenas",
      url: "page2.html"
    },
    "5": {
      lat: 10.097,
      lng: -84.376,
      name: "Naranjo",
      description: "Es el cantón número 6 de la provincia de Alajuela en Costa Rica. Está localizado al noroeste de la ciudad de Alajuela. Posee una extensión de 126.62 km² y está dividido en 9 distritos.",
      url: "page4.html",
      color: "#f36b43"
    },
    "6": {
      lat: 10.057,
      lng: -84.433,
      name: "Palmares",
      url: "page2.html"
    },
    "7": {
      lat: 10.073,
      lng: -84.244,
      name: "Poás",
      description: "Es el octavo cantón de la provincia de Alajuela, Costa Rica. La ciudad de San Pedro, se encuentra ubicado a unos 35 km al noroeste de la capital San José, en las faldas de la cordillera Volcánica Central.",
      url: "page1.html",
      color: "#f36b43"
    }
  },
  labels: {},
  regions: {}
};