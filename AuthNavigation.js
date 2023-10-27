import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "./screens/AuthStackScreens/register/Register";
import Organization from "./screens/AuthStackScreens/createOrganization/Organization";

const AuthStack = createNativeStackNavigator();

const AuthStackGroup=()=>
{
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Register" component={Register} options={{headerTitleAlign: 'center',}}/>
            <AuthStack.Screen name="Organization" component={Organization} options={{headerTitleAlign: 'center',}} />
        </AuthStack.Navigator>
    )
}

const AuthNavigation=()=>
{
    return (
        <NavigationContainer>
            <AuthStackGroup />
        </NavigationContainer>
    )
}

export default AuthNavigation;