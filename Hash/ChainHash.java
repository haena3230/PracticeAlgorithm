// 체인 해시법
public class ChainHash<K, V> {
    // 노드 생성
    class Node<K, V> {
        private K key;
        private V data;
        private Node<K, V> next;

        // 생성자
        Node(K key, V data, Node<K, V> next) {
            this.data = data;
            this.key = key;
            this.next = next;
        }

        // 키값 반환
        K getKey() {
            return key;
        }

        // 데이터 반환
        V getValue() {
            return data;
        }

        // 해시값 반환
        public int hashCode() {
            return key.hashCode();
        }
    }

    // 해시 테이블 생성
    private int size;
    private Node<K, V>[] table;

    // 생성자
    public ChainHash(int capacity) {
        try {
            table = new Node[capacity];
            this.size = capacity;
        } catch (OutOfMemoryError e) {
            this.size = 0;
        }
    }

    // 해시값 구하기
    public int hashValue(Object key) {
        return key.hashCode() % size;
    }

    // 검색
    public V search(K key) {
        int hash = hashValue(key);
        Node<K, V> p = table[hash];

        while (p != null) {
            if (p.getKey().equals(key))
                return p.getValue();
            p = p.next;
        }
        return null;
    }

    // 삽입
    public int add(K key, V data) {
        int hash = key.hashCode();
        Node<K, V> p = table[hash];
        while (p != null) {
            if (p.getKey().equals(key))
                return 1; // 중복으로 인한 삽입 실패
            p = p.next;
        }
        Node<K, V> tmp = new Node<K, V>(key, data, table[hash]);
        table[hash] = tmp;
        return 0;
    }

    // 삭제
    public int remove(K key) {
        int hash = hashValue(key);
        Node<K, V> p = table[hash];
        Node<K, V> pp = null;

        while (p != null) {
            if (p.getKey().equals(key)) {
                if (pp == null)
                    table[hash] = p.next;
                else
                    pp.next = p.next;
                return 0;
            }
            pp = p;
            p = p.next;
        }
        return 1;
    }

    public static void main(String[] args) {

    }

}
