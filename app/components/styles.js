import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        flex: 1,  
    },
    headerStyle: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        marginBottom: 24,
        backgroundColor: '#3bc1ed'
    },
    booksContainer: {
        flex: 1,
        marginLeft: 12,
        //marginRight: 24,
        marginBottom: 10,
        flexWrap: 'wrap',
        
    },
    bookRow: {
        flex: 1,
        marginBottom: 15,
        
    },
    book: {
        flex: 1,
        width: 80,
        height: 160,
        
    },
    text: {
        textAlign: 'center',
        fontSize: 13
    }
}
)