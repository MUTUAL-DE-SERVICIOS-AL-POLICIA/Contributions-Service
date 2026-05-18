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
├── app.module.ts                 # Módulo raíz que integra todos los módulos
├── main.ts                       # Punto de entrada - Configuración de microservicio NATS
├── contributions/                # Módulo principal de gestión de contribuciones
│   ├── contributions.controller.ts  # Controlador que expone patrones de mensajes NATS
│   ├── contributions.service.ts     # Lógica de negocio para contribuciones
│   ├── contributions.module.ts      # Módulo principal
│   └── entities/
│       └── contribution.entity.ts   # Entidad TypeORM de Contribution
├── common/                       # Código compartido reutilizable
│   ├── common.module.ts          # Módulo global con configuración de NATS
│   ├── dtos/                     # Data Transfer Objects
│   ├── exceptions/               # Excepciones personalizadas
│   ├── nats/                     # Servicio de NATS
│   │   └── nats.service.ts       # Servicio para interacción con NATS
│   └── index.ts                  # Exportaciones
├── config/                       # Configuración de aplicación
│   ├── envs.ts                   # Variables de entorno validadas con Joi
│   ├── services.ts               # Constantes de servicios
│   └── index.ts                  # Exportaciones
└── database/                     # Gestión de base de datos
    ├── database.module.ts        # Módulo TypeORM
    └── data-source.ts            # Configuración de conexión a PostgreSQL
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