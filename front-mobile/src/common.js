import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.1.105:3000'

function showError(error) {
   Alert.alert('Ocorreu um problema', `Mensagem: ${error}`)
}

function showSuccess(message) {
   Alert.alert('Sucesso!', message)
}

export { server, showError, showSuccess }