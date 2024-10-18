import sequelize from "@/lib/db/mysql";
export async function GET(req){
    try {
        sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the remote database has been established successfully.');
  })
    } catch (error) {
        console.log("Connection to the remote database",error)
    }
    
}