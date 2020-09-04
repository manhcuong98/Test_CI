const view = {};
view.setActiveScreen = (screenName  ) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app').innerHTML = components.welcomeScreen;
            break;
        case 'projectScreen':
            document.getElementById('app').innerHTML = components.projectScreen;
            model.projectScreen()
            break;
        case 'contactScreen':
            document.getElementById('app').innerHTML = components.contactScreen
            model.contactScreen()
            break;   
    }
}
