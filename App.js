import * as React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';


/*Componente de la pantalla secundaria dentro de la pestaña de inicio (homeScreen) */
function detailsHomeScreen(){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>DETAILS HOME</Text>
    </View>
  );
}

/* Pestaña de inicio (homeScreen) */
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                      style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}> */}
            <Text>HOME SCREEN!</Text>
            <Button style={{padding:10,}} title="Go to details" onPress={() => navigation.navigate('detailsHome') } />
      {/* </LinearGradient> */}
    </View>
  );
}

const homeStack = createStackNavigator();

function homeStackScreen(){
  return(
    <homeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#b21f66'
      }, headerTintColor:'#fff',
      headerTitleAlign:'center',
    }}>
      <homeStack.Screen name='Home' component={HomeScreen} />
      <homeStack.Screen name='detailsHome' component={detailsHomeScreen} />
    </homeStack.Navigator>
  );
}

//TAB Y VISTA DE CUPONES
function detailsCuponsScreen(){
  return(
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Text>DETAILS CUPONS</Text>
    </View>
  );
}

function CuponsScreen({ navigation }){
  return(
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <Text>CUPONS!</Text>
      <Button style={{padding:10}} title='Go to Details' onPress={() => navigation.navigate('DetailsCupons')} />
    </View>
  );
}

const cuponsStack = createStackNavigator();

function cuponsStackScreen(){
  return(
    <cuponsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#b21f66'
      }, headerTintColor:'#fff',
      headerTitleAlign:'center',
    }}>
      <cuponsStack.Screen name='Cupons' component={CuponsScreen} />
      <cuponsStack.Screen name ='DetailsCupons' component={detailsCuponsScreen}/>
    </cuponsStack.Navigator>
  );
}

function detailsSettingsScreen(){
  return(
    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
      <Text>SETTINGS SCREEN</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button style={{padding:10}} title='Go to Details' onPress={() => navigation.navigate('DetailsSettings')} />
    </View>
  );
}

const settingsStack = createStackNavigator();

//const imgSource = require('./Img/NavigationBackground.jpg');


/* screenOptions={()=>({
      header:({scene, previous, navigation}) =>{
        const {options} = scene.descriptor;
        const title = options.headerTitle;
        const title2 = 'title'

        
      }
    })} */
function settingsStackScreen(){
  return(
    <settingsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#b21f66'
      }, headerTintColor:'#fff',
      headerTitleAlign:'center',
    }} >
      <settingsStack.Screen name='Settings' component={SettingsScreen} />
      <settingsStack.Screen name='DetailsSettings' component={detailsSettingsScreen} />
    </settingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'list' : 'list';
            } else if(route.name ==='Cupons'){
              iconName = focused ? 'ticket' : 'ticket';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />
          },
        })}
        
        tabBarOptions={{
          /* activeBackgroundColor:'#fe346e',
          inactiveBackgroundColor:'#b21f66', */
          style: { backgroundColor: '#b21f66'},
          activeTintColor: '#fff',
          inactiveTintColor: '#ccc',
        }}
      >
        <Tab.Screen name="Home" component={homeStackScreen} />
        <Tab.Screen name="Cupons" component={cuponsStackScreen}/>
        <Tab.Screen name="Settings" component={settingsStackScreen}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
