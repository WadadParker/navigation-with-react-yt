import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabGroup=()=>
{
    const isManager=true;

    return (
        <Tab.Navigator
            screenOptions={({route,navigation})=>({
                tabBarIcon: ({color,focused,size})=>{
                    let iconName;
                    if(route.name==="Home"){
                        iconName="home"
                    }
                    else if(route.name==="Chat")
                    {
                        iconName="md-chatbubbles-outline"
                    }
                    else if(route.name==="Reports")
                    {
                        return <Foundation name="graph-bar" size={size} color={color} />
                    }
                    else if(route.name==="Leaderboard")
                    {
                        return <MaterialIcons name="leaderboard" size={size} color={color} />
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Chat" component={Home} />
            {isManager
            ?<Tab.Screen name="Reports" component={Home} />
            :<Tab.Screen name="Leaderboard" component={Home} />}
        </Tab.Navigator>
    )
}

const Navigation=()=>
{
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}

export default Navigation;

{/* <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: ()=> <Octicons name="home" size={24} color="black" />
                }}
            /> */
//it's said it can be done like this, but it is not best way to do, hence we do it in Tab.Navigator itself        
}
// The color focus and size property is native from Tab.Navigator only
