# Build the Vue.js frontend
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Build the Go backend
FROM golang:1.21 as go-builder
WORKDIR /go/src/app
COPY . .
RUN go get -d -v ./...
RUN go install -v ./...
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Final stage: Combine frontend and backend into a single image
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY .env ./
COPY --from=build-stage /app/dist ./dist
COPY --from=go-builder /go/src/app/main .
EXPOSE 8081
CMD ["./main"]