import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"

const participants = ['Loki', 'Bento', 'Pluto', 'Melissa', 'Nina', 'Tufão', 'Zig', 'Remendado', 'Mussum', 'Andy']

export function Home() {
    function handleParticipantAdd(user :string) {
        if (participants.includes(user)) {
            return Alert.alert('Participante já existe', 'Já existe um participante com esse nome na lista.')
        }
    }

    function handleParticipantRemove(user: string) {
        Alert.alert('Remover', `Remover o participante ${user}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert('Deletado!')
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
                />
                <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd('Pluto')}>
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
                        user={item}
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