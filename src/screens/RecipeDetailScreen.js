import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import RecipesData from "../constants/RecipesData.json"
import colors from "../theme/colors";

const RecipeDetailScreen = () => {
    const route = useRoute();
    const {recipeId} = route.params;
    const recipeDetail = RecipesData.recipes.find((recipe) => Number(recipe.id) === Number(recipeId));
    console.log('recipeId:',recipeDetail);
    return (
        <View style={styles.screen}>
            <Image
            source={{ uri: recipeDetail.image }}
            resizeMode="cover"
            style={styles.imageRecipe}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
    },
    imageRecipe:{
        backgroundColor: colors.border,
        height: 300,
    }
})

export default RecipeDetailScreen;