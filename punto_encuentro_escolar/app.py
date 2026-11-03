import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent / "objetos.db"

def get_objetos():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM objetos ORDER BY id DESC")
    objetos = cursor.fetchall()
    conn.close()
    return objetos

if __name__ == "__main__":
    for obj in get_objetos():
        print(f"{obj['id']} - {obj['nombre']}")