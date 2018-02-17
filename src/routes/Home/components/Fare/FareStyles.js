import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = {
    fareContainer: {
        width:width,
        height:40,
        padding:10,
        backgroundColor:"grey"
    },
    fareText: {
        fontSize: 16
    },
    amount:{
        fontWeight:"bold",
        fontSize: 16
    }
};

export default styles;