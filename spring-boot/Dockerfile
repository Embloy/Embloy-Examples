# Use the official Gradle image for a build stage
FROM gradle:jdk22-alpine as build

# Copy the project files to the container
COPY --chown=gradle:gradle . /home/gradle/src

# Set the working directory
WORKDIR /home/gradle/src

# Build the application
RUN ./gradlew build --no-daemon

# Use OpenJDK for the application stage
FROM openjdk:22

# Copy the built jar file from the build stage
COPY --from=build /home/gradle/src/build/libs/*.jar /usr/app/app.jar

# Set the working directory for the application
WORKDIR /usr/app

# Expose the port the application runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]