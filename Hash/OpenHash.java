// 오픈 해시법  
public class OpenHash<K, V> {
    // 버킷 상태
    enum Status {
        OCCUPIED, EMPTY, DELETED
    };

    // 버킷
    static class Bucket<K, V> {
        private K key;
        private V data;
        private Status stat;

        // 생성자
        Bucket() {
            stat = Status.EMPTY;
        }

        // 필드 값 설정
        void set(K key, V data, Status stat) {
            this.key = key;
            this.data = data;
            this.stat = stat;
        }

        // 상태 설정
        void setStat(Status stat) {
            this.stat = stat;
        }

        // 키값 반환
        K getKey() {
            return key;
        }

        // 데이터 반환
        V getValue() {
            return data;
        }

        // 키의 해시값 반환
        public int hashCode() {
            return key.hashCode();
        }
    }

    private int size;
    private Bucket<K, V>[] table;

    // 생성자
    public OpenHash(int size) {
        try {
            table = new Bucket[size];
            for (int i = 0; i < size; i++)
                table[i] = new Bucket<K, V>();
            this.size = size;
        } catch (OutOfMemoryError e) {
            this.size = 0;
        }
    }

    // 해시값 구하기
    public int hashValue(Object key) {
        return key.hashCode() % size;
    }

    // 재해시 값 구하기
    public int rehashValue(int hash) {
        return (hash + 1) % size;
    }

    // key로 버킷 검색
    public Bucket<K, V> searchNode(K key) {
        int hash = hashValue(key);
        Bucket<K, V> p = table[hash];

        for (int i = 0; p.stat != Status.EMPTY && i < size; i++) {
            if (p.stat == Status.OCCUPIED && p.getKey().equals(key))
                return p;
            hash = rehashValue(hash);
            p = table[hash];
        }
        return null;
    }

    // key로 데이터 검색
    public V search(K key) {
        Bucket<K, V> p = searchNode(key);
        if (p != null)
            return p.getValue();
        else
            return null;
    }

    // 삽입
    public int add(K key, V data) {
        if (search(key) != null)
            return 1; // 이미 등록된 키
        int hash = hashValue(key);
        Bucket<K, V> p = table[hash];
        for (int i = 0; i < size; i++) {
            if (p.stat == Status.EMPTY || p.stat == Status.DELETED) {
                p.set(key, data, Status.OCCUPIED);
                return 0;
            }
            hash = rehashValue(hash);
            p = table[hash];
        }
        return 2; // 해시테이블 full
    }

    // 삭제
    public int remove(K key) {
        Bucket<K, V> p = searchNode(key);
        if (p == null)
            return 1; // 등록되지 않음

        p.setStat(Status.DELETED);
        return 0;
    }

    public static void main(String[] args) {

    }
}
