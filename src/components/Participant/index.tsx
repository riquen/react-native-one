import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type ParticipantProps = {
    user: string
    onRemove: () => void
}

export function Participant({ user, onRemove }: ParticipantProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {user}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}