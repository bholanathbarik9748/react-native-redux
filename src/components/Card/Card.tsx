import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { cardProps } from "./types/CardProps";
import { styles } from "./styles/styles";

const Card: FC<cardProps> = ({ CardDetails }) => {
  return (
    <View style={styles.CardContainer}>
      {/* Heading Section */}
      <View style={styles.CardHeadingContainer}>
        <Text style={styles.CardTitle}>{CardDetails.name}</Text>
        <View style={styles.CategoryBadge}>
          <Text style={styles.CardCategory}>{CardDetails.category}</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.CardDescription}>{CardDetails.description}</Text>

      {/* Price and Button Section */}
      <View style={styles.CardFooterContainer}>
        <Text style={styles.CardPrice}>${CardDetails.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addToCardBtn}>
          <Text style={styles.addToCardBtnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
