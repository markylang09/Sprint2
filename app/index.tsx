// index.tsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View, Text } from 'react-native';
import Markdown from 'react-native-markdown-display';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Directly define the markdown content
const markdownContent = `
# Innovation Office - AWS Cloud Club Mapua University Manila

Welcome to the Innovation Office of the **Amazon Web Services (AWS) Cloud Club** at **Mapua University Manila**! Our Innovation Office is composed of passionate and skilled teams working together to build innovative solutions, advance cloud computing knowledge, and promote technological excellence.

## Our Teams

### 🚀 DevOps

The **DevOps Team** bridges the gap between development and operations. They focus on continuous integration, continuous deployment (CI/CD), and automation of infrastructure to ensure efficient software delivery pipelines.

### 🔒 DevSecOps

The **DevSecOps Team** integrates security practices into the DevOps pipeline. They ensure secure code development, vulnerability assessments, and compliance throughout the software development lifecycle.

### ☁️ Cloud Engineers

The **Cloud Engineers** design, implement, and manage cloud infrastructure using AWS services. They are responsible for deploying scalable, resilient, and cost-effective cloud solutions.

### ⚙️ Backend Engineers

The **Backend Engineers** focus on server-side development, database management, and API integrations. They ensure the core functionality and performance of applications.

### 🎨 UI/UX Designers

The **UI/UX Designers** create intuitive and user-friendly interfaces. They conduct user research, design wireframes, and ensure seamless user experiences.

### 💻 Frontend Developers

The **Frontend Developers** build the client-side of applications. They translate designs into responsive and interactive web interfaces using modern frameworks and technologies.

### 🌐 Frontend Engineers

The **Frontend Engineers** focus on the architecture and optimization of frontend systems. They ensure high performance, accessibility, and cross-browser compatibility.

### 📱 Frontend Mobile Developers

The **Frontend Mobile Developers** specialize in creating mobile applications for iOS and Android platforms. They develop user-friendly and high-performance mobile experiences.

---

We believe in collaboration, innovation, and continuous learning. Each team plays a crucial role in driving the success of our projects and initiatives within the AWS Cloud ecosystem.

💡 _Interested in joining one of our teams? Connect with us and be part of our journey to innovate and inspire!_
`;

const App = () => {
  const { width } = useWindowDimensions();

  // Define theme colors and styles
  const theme = {
    background: '#ffffff', // White background
    text: '#333333', // Dark gray text
    heading: '#1a73e8', // Blue headings
    accent: '#1a73e8', // Blue accents
    codeBackground: '#f5f5f5', // Light gray code background
    codeText: '#333333', // Dark gray code text
  };

  // Define responsive styles based on screen size
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: width < 768 ? wp('4%') : width < 1024 ? wp('6%') : wp('8%'), // Responsive padding
      backgroundColor: theme.background,
    },
    header: {
      height: width < 768 ? hp('6%') : width < 1024 ? hp('7%') : hp('8%'), // Responsive header height
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      backgroundColor: theme.background,
    },
    footer: {
      height: width < 768 ? hp('6%') : width < 1024 ? hp('7%') : hp('8%'), // Responsive footer height
      justifyContent: 'center', // Center vertically
      alignItems: 'center', // Center horizontally
      backgroundColor: theme.background,
    },
    markdown: {
      body: {
        fontSize: width < 768 ? wp('4%') : width < 1024 ? wp('3.5%') : wp('3%'), // Larger font for small screens, smaller for large screens
        lineHeight: width < 768 ? hp('5%') : width < 1024 ? hp('4.5%') : hp('4%'), // Larger line height for small screens
        color: theme.text,
        fontFamily: 'sans-serif', // Use a clean sans-serif font
        letterSpacing: width < 768 ? wp('0.2%') : width < 1024 ? wp('0.15%') : wp('0.1%'), // Larger letter spacing for small screens
        textAlign: 'justify', // Justify body text
      },
      heading1: {
        fontSize: width < 768 ? wp('6%') : width < 1024 ? wp('5%') : wp('4%'), // Larger heading for small screens
        fontWeight: 'bold',
        color: theme.heading,
        marginBottom: hp('1.5%'),
        letterSpacing: width < 768 ? wp('0.3%') : width < 1024 ? wp('0.2%') : wp('0.1%'), // Larger letter spacing for small screens
        textAlign: 'center', // Center-align heading
      },
      heading2: {
        fontSize: width < 768 ? wp('5%') : width < 1024 ? wp('4%') : wp('3.5%'), // Larger heading for small screens
        fontWeight: 'bold',
        color: theme.heading,
        marginBottom: hp('1.2%'),
        letterSpacing: width < 768 ? wp('0.3%') : width < 1024 ? wp('0.2%') : wp('0.1%'), // Larger letter spacing for small screens
        textAlign: 'center', // Center-align heading
      },
      heading3: {
        fontSize: width < 768 ? wp('4.5%') : width < 1024 ? wp('3.5%') : wp('3%'), // Larger heading for small screens
        fontWeight: 'bold',
        color: theme.heading,
        marginBottom: hp('1%'),
        letterSpacing: width < 768 ? wp('0.3%') : width < 1024 ? wp('0.2%') : wp('0.1%'), // Larger letter spacing for small screens
        textAlign: 'center', // Center-align heading
      },
      paragraph: {
        marginBottom: width < 768 ? hp('1.5%') : width < 1024 ? hp('2%') : hp('2.5%'), // Increased margin between paragraphs
        textAlign: 'justify', // Justify paragraphs
      },
      list_item: {
        marginBottom: width < 768 ? hp('1%') : width < 1024 ? hp('1.2%') : hp('1.5%'), // Increased margin between list items
        textAlign: 'justify', // Justify list items
      },
      code_block: {
        backgroundColor: theme.codeBackground,
        padding: width < 768 ? wp('2%') : width < 1024 ? wp('3%') : wp('4%'), // Responsive padding
        borderRadius: wp('0.5%'), // Rounded corners
        fontFamily: 'monospace',
        marginBottom: width < 768 ? hp('1.5%') : width < 1024 ? hp('2%') : hp('2.5%'), // Increased margin below code blocks
        color: theme.codeText,
        textAlign: 'left', // Left-align code blocks
      },
      em: {
        fontStyle: 'italic',
        color: theme.text,
      },
      strong: {
        fontWeight: 'bold',
        color: theme.text,
      },
      link: {
        color: theme.accent,
        textDecorationLine: 'underline',
      },
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={{ fontSize: width < 768 ? wp('5%') : width < 1024 ? wp('4%') : wp('3.5%'), fontWeight: 'bold', color: theme.heading }}>
        AWS Cloud Club - Mapúa University Manila
        </Text>
      </View>

      {/* Markdown Content */}
      <ScrollView>
        <Markdown style={styles.markdown}>
          {markdownContent}
        </Markdown>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={{ fontSize: width < 768 ? wp('3.5%') : width < 1024 ? wp('3%') : wp('2.5%'), color: theme.text }}>
          © 2025 AWS Cloud Club - Mapúa University Manila
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;