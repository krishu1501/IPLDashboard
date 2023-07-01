FROM openjdk:17-alpine

COPY /target/ipldashboard-0.0.1-SNAPSHOT.jar /

ENTRYPOINT ["java", "-jar", "ipldashboard-0.0.1-SNAPSHOT.jar"]

EXPOSE 8080