import { useState } from "react"
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Participant } from "../../components/Participant"
import { styles } from "./styles"

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState<string>('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Participante já existe', 'Já existe um participante com esse nome na lista.')
        }

        setParticipants(prevState => [ ...prevState, participantName ])
        setParticipantName('')
    }

    function handleParticipantRemove(participantName: string) {
        Alert.alert('Remover', `Remover o participante ${participantName}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(item => item !== participantName))
            },
            {
                text: 'Não'
            }
        ])
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
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        participantName={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante cadastrado.
                    </Text>
                )}
            />
        </View>
    )
}