// import styled from "styled-components";
// import { View, Text, Image } from "react-native";
// import Constants from 'expo-constants';

// const StatusBarHeight = Constants.statusBarHeight;

// export const Colors = {
//     primary: "#ffffff",
//     secondary: "#E5E7EB",
//     tertiary: "#1F2937",
//     darkLight: "#9CA3AF",
//     brand: "#6D28D9",
//     green: "#10B981",
//     red: "#EF4444"
// };

// const {primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

// export const StyledContainer = styled.View`
//     flex: 1;
//     padding: 25px;
//     padding-top: ${StatusBarHeight + 10}px;
//     background-color: ${primary};
// `

// export const InnerContainer = styled.View`
//     flex: 1;
//     width: 100%;
//     align-items: center;
// `;

// export const PageLogo = styled.Image`
//     width: 250px;
//     height: 200px;
// `;

// export const PageTitle = styled.Text`
//     font-size: 30px;
//     text-align: center;
//     font-weight: bold;
//     color: ${brand};
//     padding: 10px;
// `;

import styled from "styled-components/native";  // Ensure 'styled-components/native' is used
import { View, Text, Image } from "react-native";
import Constants from 'expo-constants';

// Get the status bar height dynamically
const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444"
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

// Styled container for the main view
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;  // Directly use the number
    background-color: ${primary};
`;

// Inner container for centering content
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

// Styled logo for the page
export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

// Styled title for the page
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
`;
