import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MenTab } from "../tabs/men-tab";
import { WomanTab } from "../tabs/woman-tab";
import { styles } from "./styles";

const initialLayout = { width: Dimensions.get("window").width };

export const ProductTabs = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "men", title: "Produtos Masculinos" },
    { key: "women", title: "Produtos Femininos" },
  ];

  const renderScene = SceneMap({
    men: MenTab,
    women: WomanTab,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          tabStyle={styles.tabStyle}
          renderLabel={({ route, focused, color }: any) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.label, {color}]}>
                {route.title}
                </Text>
            </View>
          )}
          activeColor="#000"
          inactiveColor="#000"
        />
      )}
    />
  );
};
