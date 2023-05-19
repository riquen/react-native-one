import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"

export function Home() {
    function handleParticipantAdd() {
        console.log("Adicionado")
    }

    function handleParticipantRemove() {
        console.log('Removido')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Quinta, 18 de Maio de 2023
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor='#6b6b6b'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <Participant user='Henrique' onRemove={handleParticipantRemove} />
            <Participant user='Luísa' onRemove={handleParticipantRemove} />
            <Participant user='Loki' onRemove={handleParticipantRemove} />
        </View>
    )
}