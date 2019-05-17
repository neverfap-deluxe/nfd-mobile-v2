export const AlbumArt = ({ url, onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{uri: url}} />
    </TouchableOpacity>
  </View>
);
