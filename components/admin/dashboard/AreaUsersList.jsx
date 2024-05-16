import Image from "next/image";

// Fonction pour récupérer les utilisateurs, ici, on retourne des données fictives
function getUsers() {
    return [
        {
            id: 1,
            name: "Mohamed Ali ZID",
            email: "mohamedali.zid@gmail.com",
            avatar: "https://img.freepik.com/vecteurs-premium/portrait-jeune-homme-image-icone-cadre-arrondi-couleur_24911-7131.jpg?size=626&ext=jpg&ga=GA1.1.1377931310.1714742458&semt=ais",
            role: "admin"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            avatar: "https://img.freepik.com/psd-gratuit/rendu-3d-du-personnage-avatar_23-2150611756.jpg?size=626&ext=jpg&ga=GA1.1.1377931310.1714742458&semt=ais",
            role: "user"
        },
    ];
}

// Composant qui affiche la liste des utilisateurs
export default function AreaUsersList() {
    // Récupérer les utilisateurs (dans cet exemple, des données fictives)
    const users =  getUsers();
    
    // Afficher la liste des utilisateurs
    return (
        <div className="card">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Image src={user.avatar} width="40" height="40" style={{ borderRadius: "50%" }} alt={`${user.name}'s Avatar`} />
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === "admin" ? (
                                    <span className="badge bg-pink-500 textwhite">{user.role}</span>
                                ) : (
                                    <span className="badge bg-green-500 textwhite">{user.role}</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
