import { Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
    const [postText, setPostText] = useState('');
    
    const handleSubmit = async () => {
        const posts = await AsyncStorage.getItem('posts');
        const updatedPosts = [...posts, {text: postText}];
        await AsyncStorage.setItem('posts', updatedPosts);
    }
    
    return (
    <>
      <TextInput 
        value={postText}
        onChangeText={setPostText}
        placeholder="What's on your mind?"
      />
      <Button title="Post" onPress={handleSubmit} />
    </>
  )
}