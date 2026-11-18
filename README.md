# Contributions-Service

## Descripción

**Contributions-Service** es un microservicio especializado que gestiona la información de las contribuciones y aportes de los afiliados a la plataforma. Las contribuciones son los pagos periódicos realizados por los afiliados (policías activos o jubilados) para mantener su cobertura y la de sus beneficiarios, asegurando la sostenibilidad del sistema de servicios médicos y administrativos. Forma parte de una arquitectura de microservicios basada en **NestJS** y utiliza **NATS** para la comunicación asincrónica entre servicios.

Maneja datos como:
- Registro de contribuciones y aportes
- Histórico de pagos y transacciones
- Cálculo de cuotas y montos adeudados
- Estados de pago (pagado, pendiente, vencido)
- Relación entre afiliados y sus contribuciones
- Auditoría financiera y reportes

---

## Estructura del Proyecto

```
src/
├── app.module.ts                 # Módulo raíz que organiza todos los módulos de la aplicación
├── main.ts                       # Punto de entrada principal de la aplicación
├── contributions/                # Módulo principal de gestión de contribuciones
│   ├── controllers/              # Controladores que manejan rutas de contribuciones
│   ├── services/                 # Servicios con la lógica de cálculo y validación
│   └── dto/                      # Data Transfer Objects para validación de datos
├── payments/                     # Módulo de procesamiento de pagos
│   ├── controllers/              # Controladores de pagos
│   ├── services/                 # Servicios de transacciones y confirmación
│   └── dto/                      # Validación de datos de pagos
├── accounting/                   # Módulo de contabilidad y reportes financieros
│   ├── controllers/              # Controladores de reportes
│   ├── services/                 # Servicios de generación de reportes
│   └── dto/                      # Validación para auditoría
├── common/                       # Código compartido reutilizable en toda la aplicación
│   ├── filters/                  # Filtros para manejo de excepciones
│   ├── guards/                   # Guards para proteger rutas
│   └── decorators/               # Decoradores personalizados
├── config/                       # Archivos de configuración (BD, variables ENV, etc)
│   └── database.config.ts        # Configuración específica de PostgreSQL
├── database/                     # Gestión de base de datos, migraciones y datos iniciales
│   ├── migrations/               # Migraciones TypeORM para cambios en el esquema BD
│   ├── seeds/                    # Seeders para llenar BD con datos de prueba
│   └── entities/                 # Entidades (modelos) que representan tablas de la BD
```

---

## Clonar el repositorio y agregarle un nombre nuevo del nuevo proyecto

```bash
git clone https://github.com/MUTUAL-DE-SERVICIOS-AL-POLICIA/Contributions-Service.git nombre-contributions-service
```

## Inicializar proyecto

```bash
# Entrar al repositorio clonado con el nuevo nombre del proyecto
cd nombre-contributions-service

# Elimina el origen remoto actual
git remote remove origin

# Crear el archivo .env en base al .env.template
cp .env.template .env

# Instalar las dependencias
pnpm install

# Correr proyecto en modo desarrollo
pnpm start:dev

# Crear nuevo Módulo
nest g res nombreModulo

# Crear un seeder
pnpm seed:create --name src/database/seeds/nombre_seed.ts

# Correr seeder
pnpm seed:run --name src/database/seeds/{code}-nombre_seed.ts

# Crear migración
pnpm typeorm migration:create src/database/migrations/NombreDeLaMigración

# Correr migración
pnpm migration:run

# Revertir migración
pnpm migration:revert

# Ver estado de migraciones
pnpm migration:show

# Para enlazar a un nuevo repositorio
git remote add origin https://github.com/tu-usuario/{nombre-contributions-service}.git
git add .
git commit -m "Inicialización del nuevo proyecto"
git branch -M main
git push -u origin main
```