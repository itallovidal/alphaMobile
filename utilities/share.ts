// import {Alert, Share} from "react-native";
// import {placeholder} from "../screens/temp";
// import {IUser} from "../screens/list/list";
//
// function textFormat(obj: IUser[]){
//     let message: string = ''
//
//     for(let i = 0; i < obj.length; i++){
//         message +=  `Nome: ${obj[i].username} ${obj[i].fullname},\n` +
//                     `email: ${obj[i].email},\n` +
//                     `Telefone: ${obj[i].phoneNumber},\n` +
//                     `CEP: ${obj[i].CEP},\n` +
//                     `bairro: ${obj[i].district},\n` +
//                     `UF: ${obj[i].UF},\n` +
//                     `rua: ${obj[i].street},\n` +
//                     `cidade: ${obj[i].city},\n` +
//                     '-----------------------------\n'
//     }
//
//     return message
// }
//
// export const onShare = async () => {
//     try {
//         const result = await Share.share({
//             message: textFormat(placeholder),
//             title: 'Compartilhar lista Completa'
//         }, {subject: 'Compartilhando Lista Completa'});
//         if (result.action === Share.sharedAction) {
//             if (result.activityType) {
//                 // shared with activity type of result.activityType
//             } else {
//                 // shared
//             }
//         } else if (result.action === Share.dismissedAction) {
//             // dismissed
//         }
//     } catch (error: any) {
//         Alert.alert(error.message);
//     }
// };